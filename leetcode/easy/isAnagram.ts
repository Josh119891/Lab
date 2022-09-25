function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let txt of s) {
    map.set(txt, map.get(txt) + 1 || 1);
  }
  for (let txt of t) {
    let temp = map.get(txt);
    if (!temp) return false;
    map.set(txt, temp - 1);
  }
  return true;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    map[t[i]] = map[t[i]] ? map[t[i]] - 1 : -1;
  }
  return Object.values(map).every((i) => i === 0);
}
