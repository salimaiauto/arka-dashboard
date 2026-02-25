import { Queue } from 'bullmq';
import IORedis from 'ioredis';

// Connect to Redis (Upstash or VPS)
const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null,
});

// Create the 'agent-jobs' queue
export const agentQueue = new Queue('agent-jobs', { connection });

// Helper to add jobs
export const addAgentJob = async (agentName: string, data: any) => {
  return await agentQueue.add(agentName, data, {
    attempts: 3, // Retry failed jobs 3 times
    backoff: {
      type: 'exponential',
      delay: 1000, // Wait 1s, then 2s, then 4s...
    },
    removeOnComplete: true, // Keep history in DB, not Redis
    removeOnFail: false, // Keep failed jobs for inspection
  });
};
