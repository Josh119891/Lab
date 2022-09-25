function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs];
  const map = new Map();
  for (let str of strs) {
    let txt = str.split("").sort().join();
    map.set(txt, [...(map.get(txt) || []), str]);
  }
  return Array.from(map.values());
}
