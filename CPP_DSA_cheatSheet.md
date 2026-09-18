# C++ for DSA — Complete Cheatsheet

## 1. Running C++ Code

### Compile & Run (g++)
```bash
g++ -o main main.cpp          # basic compile
g++ -std=c++17 -O2 -o main main.cpp   # with standard + optimization
./main                        # run (Linux/Mac)
main.exe                      # run (Windows)
```

### One-liner (compile + run)
```bash
g++ main.cpp -o main && ./main
```

### Useful flags
| Flag | Purpose |
|---|---|
| `-std=c++17` / `-std=c++20` | set language standard |
| `-O2` | optimization (use for competitive programming) |
| `-Wall -Wextra` | show warnings |
| `-g` | debug symbols (for gdb) |
| `-o name` | set output binary name |

### Online (no setup)
- [godbolt.org](https://godbolt.org) — compiler explorer
- [onlinegdb.com](https://onlinegdb.com)
- [replit.com](https://replit.com)

### Minimal template
```cpp
#include <bits/stdc++.h>   // includes almost all STL headers (GCC only, not portable but common in CP)
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // code here
    return 0;
}
```
> `bits/stdc++.h` is GCC-specific — great for contests, avoid in production code (use specific headers instead).

---

## 2. Printing / Output (I/O)

### `cout` (C++ style, `<iostream>`)
```cpp
#include <iostream>
using namespace std;

cout << "Hello, World!" << endl;   // endl = newline + flush
cout << "Hello, World!\n";         // \n = newline, no flush (faster, prefer in loops)

int x = 5;
cout << "x = " << x << endl;       // chain values with <<
cout << x << " " << x*2 << "\n";   // multiple values

// Formatting
#include <iomanip>
cout << fixed << setprecision(2) << 3.14159 << endl;  // 3.14
cout << setw(5) << 42 << endl;                          // right-align width 5
```

### `printf` (C style, `<cstdio>`, faster for heavy output)
```cpp
#include <cstdio>

printf("Hello, World!\n");
int x = 5;
printf("x = %d\n", x);
printf("%s %d %f %c %lld\n", "str", 1, 2.5, 'c', (long long)100); 
// %d int | %f double | %s char* (use s.c_str() for std::string)
// %c char | %lld long long | %.2f fixed decimals
```

### Reading input (for completeness)
```cpp
int x; cin >> x;                     // cin: whitespace-separated
string s; getline(cin, s);           // reads full line including spaces
scanf("%d", &x);                     // C style
```

> Tip: `ios_base::sync_with_stdio(false); cin.tie(NULL);` (shown in the template above) speeds up `cin`/`cout` significantly — always add this in competitive programming.

---

## 3. Core Headers for DSA

| Header | Provides |
|---|---|
| `<vector>` | dynamic array |
| `<array>` | fixed-size array |
| `<string>` | strings |
| `<utility>` | `pair`, `swap`, `move` |
| `<tuple>` | `tuple` |
| `<algorithm>` | sort, search, transform, etc. |
| `<numeric>` | accumulate, gcd, lcm, iota |
| `<cmath>` | math functions |
| `<map>` / `<unordered_map>` | key-value containers |
| `<set>` / `<unordered_set>` | unique element containers |
| `<stack>` | LIFO |
| `<queue>` | FIFO, priority_queue |
| `<deque>` | double-ended queue |
| `<list>` | doubly linked list |
| `<bitset>` | fixed-size bit array |
| `<climits>` | `INT_MAX`, `LLONG_MIN`, etc. |
| `<functional>` | `greater<>`, `less<>`, `function` |

---

## 4. Vector (`std::vector`)
```cpp
vector<int> v;                     // empty
vector<int> v(n);                  // size n, zero-initialized
vector<int> v(n, val);             // size n, filled with val
vector<vector<int>> grid(n, vector<int>(m, 0)); // 2D

v.push_back(x);      v.emplace_back(x);   // insert at end
v.pop_back();                              // remove last
v.size();  v.empty();
v[i];  v.at(i);                            // access (at() bounds-checked)
v.front(); v.back();
v.insert(v.begin()+i, x);                  // insert at index
v.erase(v.begin()+i);                      // erase at index
v.clear();
sort(v.begin(), v.end());
sort(v.rbegin(), v.rend());                // descending
reverse(v.begin(), v.end());
*max_element(v.begin(), v.end());
*min_element(v.begin(), v.end());
accumulate(v.begin(), v.end(), 0);         // sum
```

---

## 5. Pair / Tuple
```cpp
pair<int,int> p = {1, 2};
p.first; p.second;
vector<pair<int,int>> vp;
sort(vp.begin(), vp.end());   // sorts by first, then second

tuple<int,int,int> t = {1,2,3};
auto [a,b,c] = t;             // structured bindings (C++17)
get<0>(t);
```

---

## 6. String
```cpp
string s = "hello";
s.length(); s.size();
s.substr(pos, len);
s.find("lo");                 // returns index or string::npos
s + "world";                  // concatenation
s.push_back('!');
s.append("...");
reverse(s.begin(), s.end());
sort(s.begin(), s.end());
to_string(123);                // int -> string
stoi(s); stol(s); stoll(s);   // string -> int/long
stringstream ss(s);            // for splitting/parsing
```

---

## 7. Set / Map

### `set` (sorted, unique) / `unordered_set` (hash, unique)
```cpp
set<int> s;
s.insert(x);  s.erase(x);
s.count(x);   s.find(x) != s.end();   // membership check
*s.begin(); *s.rbegin();              // min, max
s.lower_bound(x); s.upper_bound(x);   // O(log n), sorted set only
multiset<int> ms;                     // allows duplicates
```

### `map` (sorted, tree-based) / `unordered_map` (hash-based)
```cpp
map<int,int> m;                        // sorted by key, O(log n) ops
unordered_map<int,int> um;             // hash table, O(1) avg ops, no order

m[key] = value;                        // insert or update (creates 0 if key absent!)
m.insert({key, value});                // insert only if key doesn't exist
m.count(key);                          // 0 or 1 — quick existence check
m.find(key) != m.end();                // iterator-based existence check
m.erase(key);                          // remove by key
m.size(); m.empty();

for (auto& [k, v] : m) { ... }         // structured binding iteration (C++17)
                                        // map: iterates in sorted key order
                                        // unordered_map: no guaranteed order

// common hashmap patterns
unordered_map<int,int> freq;
for (int x : v) freq[x]++;             // frequency counter

unordered_map<string,int> wordCount;
wordCount["apple"]++;                  // auto-creates entry with value 0, then ++

if (m.find(key) == m.end()) { ... }    // key not present

// unordered_map with pair key needs a custom hash (no default hash for pair)
struct pair_hash {
    size_t operator()(const pair<int,int>& p) const {
        return hash<long long>()(((long long)p.first << 32) ^ p.second);
    }
};
unordered_map<pair<int,int>, int, pair_hash> pm;
```

### `map`/`unordered_map` extras
```cpp
m.lower_bound(x);   m.upper_bound(x);  // sorted map only, O(log n)
m.begin()->first;   m.begin()->second; // smallest key (map only)
m.rbegin()->first;                     // largest key (map only)
```

> **Rule of thumb:** use `unordered_map`/`unordered_set` when you just need fast lookups and don't care about order (most DSA problems — frequency counts, seen-before checks, two-sum, etc.). Use `map`/`set` when you need sorted iteration or `lower_bound`/`upper_bound`.

---

## 8. Stack / Queue / Deque
```cpp
stack<int> st;
st.push(x); st.pop(); st.top(); st.empty();

queue<int> q;
q.push(x); q.pop(); q.front(); q.back(); q.empty();

deque<int> dq;
dq.push_back(x); dq.push_front(x);
dq.pop_back();   dq.pop_front();
```

### Priority Queue (heap)
```cpp
priority_queue<int> pq;                          // max-heap
priority_queue<int, vector<int>, greater<int>> pq; // min-heap
pq.push(x); pq.top(); pq.pop();
```

---

## 9. `<algorithm>` Essentials
```cpp
sort(v.begin(), v.end());
sort(v.begin(), v.end(), greater<int>());        // descending
sort(v.begin(), v.end(), [](int a,int b){return a>b;}); // custom lambda

binary_search(v.begin(), v.end(), x);            // bool, needs sorted
lower_bound(v.begin(), v.end(), x);              // first >= x, iterator
upper_bound(v.begin(), v.end(), x);              // first > x, iterator

next_permutation(v.begin(), v.end());
prev_permutation(v.begin(), v.end());

unique(v.begin(), v.end());                      // removes consecutive dupes
count(v.begin(), v.end(), x);
find(v.begin(), v.end(), x);

max(a,b); min(a,b);
swap(a,b);
__gcd(a,b);                                      // GCC builtin
```

---

## 10. `<numeric>`
```cpp
accumulate(v.begin(), v.end(), 0);       // sum, start=0
iota(v.begin(), v.end(), 0);             // fill 0,1,2,3...
gcd(a,b);  lcm(a,b);                     // C++17
```

---

## 11. Bit Manipulation
```cpp
x << n; x >> n;                 // shift
x & y; x | y; x ^ y; ~x;
__builtin_popcount(x);          // count set bits (int)
__builtin_popcountll(x);        // for long long
__builtin_clz(x);               // count leading zeros
__builtin_ctz(x);               // count trailing zeros
bitset<32> b(x);                // fixed-size bit representation
b.count(); b.set(i); b.reset(i); b.flip(i);
```

---

## 12. Common Limits & Utility
```cpp
INT_MAX; INT_MIN;
LLONG_MAX; LLONG_MIN;
1e9; 1e18;                      // common "infinity" values
#define ll long long
#define pb push_back
#define all(v) v.begin(), v.end()
```

---

## 13. Graph/DSA Building Blocks
```cpp
vector<vector<int>> adj(n);     // adjacency list
adj[u].push_back(v);

// BFS
queue<int> q; vector<bool> visited(n, false);
q.push(start); visited[start] = true;
while (!q.empty()) {
    int u = q.front(); q.pop();
    for (int v : adj[u]) if (!visited[v]) { visited[v] = true; q.push(v); }
}

// DFS (recursive)
void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[u] = true;
    for (int v : adj[u]) if (!visited[v]) dfs(v, adj, visited);
}
```

---

## 14. Complexity Quick Reference

| Container | Access | Search | Insert | Delete |
|---|---|---|---|---|
| `vector` | O(1) | O(n) | O(1) amortized (end) | O(n) |
| `set`/`map` | — | O(log n) | O(log n) | O(log n) |
| `unordered_set`/`map` | — | O(1) avg | O(1) avg | O(1) avg |
| `stack`/`queue`/`deque` | O(1) ends | — | O(1) | O(1) |
| `priority_queue` | O(1) top | — | O(log n) | O(log n) |

---

## 15. Quick Debug Tip
```cpp
#ifdef LOCAL
  #define debug(x) cerr << #x << " = " << x << endl;
#else
  #define debug(x)
#endif
```
Compile locally with `-DLOCAL` to enable debug prints without affecting submissions.