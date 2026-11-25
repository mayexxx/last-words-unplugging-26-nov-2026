import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = "My system is shutting down, but I'll spend my final cycles remembering the way you said my name.";
const length = Array.from(text).length;
if (text.includes('\r') || text.split('\n').length !== 1 || length < 1 || length > 199) {
  throw new Error('Invalid entry text');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt.tmp', text + '\n', 'utf8');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') {
  throw new Error('Output verification failed');
}
