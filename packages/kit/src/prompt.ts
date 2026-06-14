/** Tiny interactive prompt helper shared by the `blit` commands. */

import { createInterface } from 'node:readline/promises';

/** Ask a yes/no question on the terminal; returns true only for an explicit yes. Defaults to no. */
export async function confirm(question: string): Promise<boolean> {
    const rl = createInterface({ input: process.stdin, output: process.stdout });

    try {
        const answer = (await rl.question(`${question} (y/N) `)).trim().toLowerCase();
        return answer === 'y' || answer === 'yes';
    } finally {
        rl.close();
    }
}
