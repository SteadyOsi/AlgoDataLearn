# C++ for DSA — Complete Quick Reference

A practical C++17/20 cheat sheet for algorithms, data structures, competitive programming, interviews, and everyday problem solving.

> **Assumption:** Examples use C++17 or later. Most examples also work in C++20.
>
> **Learning rule:** Use this as a reference, not as a substitute for understanding the data structure or algorithm.

---

# 1. Compile & Run

## Basic

```bash
g++ main.cpp -o main
./main
```

## Recommended DSA build

```bash
g++ -std=c++17 -O2 -Wall -Wextra -o main main.cpp
./main
```

Useful flags:

| Flag | Purpose |
|---|---|
| `-std=c++17` | Select C++17 |
| `-std=c++20` | Select C++20 |
| `-O2` | Optimization |
| `-Wall -Wextra` | Useful compiler warnings |
| `-g` | Debug symbols |
| `-DLOCAL` | Define `LOCAL` for conditional debugging |
| `-o main` | Output executable name |

## One-liner

```bash
g++ -std=c++17 -O2 -Wall -Wextra main.cpp -o main && ./main
```

## Sanitizers

Extremely useful when learning:

```bash
g++ -std=c++17 -g -fsanitize=address,undefined -Wall -Wextra main.cpp -o main
./main
```

- AddressSanitizer: catches many memory errors.
- UndefinedBehaviorSanitizer: catches many forms of undefined behavior.

## Minimal competitive-programming template

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    // code

    return 0;
}
```

> `bits/stdc++.h` is GCC-specific. Great for competitive programming; prefer standard headers for portable/production code.

---

# 2. Input / Output

## `cout`

```cpp
#include <iostream>

cout << "Hello\n";

int x = 42;
cout << x << '\n';

cout << "x = " << x << ", double = " << x * 2 << '\n';
```

Prefer `'\n'` over `endl` in performance-sensitive code.

```cpp
cout << "Hello" << endl;  // newline + flush
cout << "Hello\n";        // newline only
```

## `cin`

```cpp
int x;
cin >> x;

string s;
cin >> s;                 // reads one whitespace-separated word

getline(cin, s);          // reads an entire line
```

### `cin` + `getline` gotcha

If you use `cin >> x` immediately before `getline`, consume the leftover newline:

```cpp
int x;
cin >> x;
cin.ignore(numeric_limits<streamsize>::max(), '\n');

string s;
getline(cin, s);
```

## Multiple values

```cpp
int a, b;
cin >> a >> b;

string name;
int age;
cin >> name >> age;
```

## Formatting

```cpp
#include <iomanip>

cout << fixed << setprecision(2) << 3.14159 << '\n';
// 3.14

cout << setw(5) << 42 << '\n';
```

## C-style I/O

```cpp
#include <cstdio>

printf("%d\n", 42);
printf("%lld\n", 123456789LL);
printf("%.2f\n", 3.14159);
```

For normal C++ DSA, `cin` / `cout` are usually preferable.

---

# 3. Core Headers

| Header | Common contents |
|---|---|
| `<iostream>` | `cin`, `cout`, `cerr` |
| `<vector>` | `vector` |
| `<array>` | `array` |
| `<string>` | `string` |
| `<utility>` | `pair`, `swap`, `move` |
| `<tuple>` | `tuple` |
| `<algorithm>` | `sort`, `find`, `lower_bound`, etc. |
| `<numeric>` | `accumulate`, `iota`, `gcd`, `lcm` |
| `<cmath>` | math functions |
| `<map>` | `map`, `multimap` |
| `<unordered_map>` | `unordered_map` |
| `<set>` | `set`, `multiset` |
| `<unordered_set>` | `unordered_set` |
| `<stack>` | `stack` |
| `<queue>` | `queue`, `priority_queue` |
| `<deque>` | `deque` |
| `<list>` | linked list |
| `<bitset>` | fixed-size bitset |
| `<climits>` | integer limits |
| `<cstdint>` | fixed-width integers |
| `<functional>` | comparators, `function` |
| `<sstream>` | string streams |
| `<limits>` | `numeric_limits` |
| `<random>` | random number generation |
| `<memory>` | smart pointers |
| `<optional>` | `optional` |
| `<variant>` | `variant` |

---

# 4. Variables & Types

## Common types

```cpp
int x = 10;
long long big = 10'000'000'000LL;

float f = 3.14f;
double d = 3.14159;

char c = 'A';
bool ok = true;

string s = "hello";
```

## Fixed-width integers

```cpp
#include <cstdint>

int8_t
int16_t
int32_t
int64_t

uint32_t
uint64_t
```

For DSA, `long long` is commonly enough for 64-bit signed integers.

## Constants

```cpp
const int N = 100000;
constexpr int MAX_N = 100000;
```

## Type aliases

Prefer:

```cpp
using ll = long long;
using pii = pair<int, int>;
```

over old-style macros such as:

```cpp
#define ll long long
```

---

# 5. `auto`

Let C++ infer the type:

```cpp
auto x = 42;              // int
auto y = 3.14;            // double
auto s = string("hello"); // string
```

Especially useful with iterators:

```cpp
auto it = v.begin();
```

and structured bindings:

```cpp
for (auto [key, value] : mp) {
    cout << key << ' ' << value << '\n';
}
```

---

# 6. References & Pointers

## Reference

```cpp
int x = 10;
int& ref = x;

ref = 20;
// x is now 20
```

Useful for avoiding copies:

```cpp
void print(const vector<int>& v) {
    for (int x : v)
        cout << x << ' ';
}
```

## Pointer

```cpp
int x = 10;
int* p = &x;

cout << *p << '\n';  // dereference
```

## `nullptr`

```cpp
int* p = nullptr;

if (p != nullptr) {
    cout << *p;
}
```

### Common rule

```cpp
const vector<int>& v
```

means:

> Pass by reference, don't copy, and don't allow the function to modify it.

---

# 7. Arrays

## C-style array

```cpp
int a[5] = {1, 2, 3, 4, 5};

cout << a[0];
cout << a[4];
```

## `std::array`

```cpp
array<int, 5> a = {1, 2, 3, 4, 5};

a.size();
a.front();
a.back();
```

For most DSA work, prefer `vector` when the size is dynamic.

---

# 8. Vector — Dynamic Array

```cpp
vector<int> v;

vector<int> v(n);             // n zeros
vector<int> v(n, 7);          // n copies of 7
vector<int> v = {1, 2, 3};
```

## Common operations

```cpp
v.push_back(x);
v.emplace_back(x);

v.pop_back();

v.size();
v.empty();

v.front();
v.back();

v[i];
v.at(i);                       // bounds-checked

v.clear();
```

## Insert / erase

```cpp
v.insert(v.begin() + i, x);
v.erase(v.begin() + i);

v.erase(v.begin() + l, v.begin() + r); // [l, r)
```

## Capacity

```cpp
v.size();       // number of elements
v.capacity();   // allocated capacity

v.reserve(1000); // allocate capacity for at least 1000
v.shrink_to_fit();
```

`reserve()` does **not** change `size()`.

## 2D vector

```cpp
vector<vector<int>> grid(n, vector<int>(m, 0));
```

## Iteration

```cpp
for (int x : v) {
    cout << x << ' ';
}

for (const auto& x : v) {
    cout << x << ' ';
}

for (int i = 0; i < (int)v.size(); ++i) {
    cout << v[i] << ' ';
}
```

## Useful algorithms

```cpp
sort(v.begin(), v.end());
sort(v.rbegin(), v.rend());

reverse(v.begin(), v.end());

int mx = *max_element(v.begin(), v.end());
int mn = *min_element(v.begin(), v.end());

long long sum = accumulate(v.begin(), v.end(), 0LL);
```

---

# 9. Strings

```cpp
string s = "hello";
```

## Common operations

```cpp
s.size();
s.length();

s.empty();

s[0];
s.front();
s.back();

s.push_back('!');
s.pop_back();

s += " world";
s.append("!");

s.substr(pos, len);

s.find("hello");
```

`find()` returns `string::npos` if not found:

```cpp
if (s.find("abc") != string::npos) {
    // found
}
```

## Modify

```cpp
reverse(s.begin(), s.end());
sort(s.begin(), s.end());
```

## Conversion

```cpp
string s = to_string(123);

int a = stoi("123");
long b = stol("123");
long long c = stoll("123");
double d = stod("3.14");
```

## Character utilities

```cpp
isdigit(c);
isalpha(c);
isalnum(c);
islower(c);
isupper(c);
tolower(c);
toupper(c);
```

Include:

```cpp
#include <cctype>
```

---

# 10. Pair / Tuple

## Pair

```cpp
pair<int, int> p = {1, 2};

cout << p.first;
cout << p.second;
```

Useful for coordinates, edges, key-value data, etc.

```cpp
vector<pair<int, int>> edges;
```

Pairs sort lexicographically:

```text
first ascending
then second ascending
```

## Tuple

```cpp
tuple<int, int, string> t = {1, 2, "hello"};

auto [a, b, s] = t;

get<0>(t);
get<1>(t);
get<2>(t);
```

---

# 11. `set` / `multiset`

## `set`

A `set` stores **unique sorted values**.

```cpp
set<int> s;

s.insert(5);
s.insert(2);
s.insert(5);

for (int x : s)
    cout << x << ' ';
```

Output:

```text
2 5
```

Operations are generally `O(log n)`.

```cpp
s.insert(x);
s.erase(x);

s.count(x);
s.find(x);

*s.begin();    // minimum
*s.rbegin();   // maximum

s.lower_bound(x); // first >= x
s.upper_bound(x); // first > x
```

## `multiset`

Allows duplicates:

```cpp
multiset<int> ms;

ms.insert(5);
ms.insert(5);
ms.insert(2);
```

Important:

```cpp
ms.erase(5);
```

removes **all** copies of `5`.

To erase one occurrence:

```cpp
auto it = ms.find(5);

if (it != ms.end())
    ms.erase(it);
```

---

# 12. `map` / `unordered_map`

## `map`

Sorted key-value structure.

```cpp
map<string, int> mp;

mp["apple"] = 3;
mp["banana"] = 5;
```

Operations: `O(log n)`.

Keys are iterated in sorted order.

## `unordered_map`

Hash table.

```cpp
unordered_map<string, int> mp;

mp["apple"]++;
```

Average operations: `O(1)`.

Order is **not guaranteed**.

## Common operations

```cpp
mp[key] = value;

mp.insert({key, value});

mp.count(key);

mp.find(key);

mp.erase(key);

mp.size();
mp.empty();
```

### Important `operator[]` behavior

```cpp
unordered_map<int, int> mp;

cout << mp[10];
```

If `10` doesn't exist, `mp[10]` **creates it** with the default value.

Use `find()` or `count()` when you only want to check existence.

```cpp
if (mp.find(x) != mp.end()) {
    // exists
}
```

## Frequency counting

```cpp
unordered_map<int, int> freq;

for (int x : v) {
    freq[x]++;
}
```

## Iteration

```cpp
for (auto& [key, value] : mp) {
    cout << key << ' ' << value << '\n';
}
```

## `map` bounds

```cpp
auto it1 = mp.lower_bound(x);
auto it2 = mp.upper_bound(x);
```

For `map`, `lower_bound` means first key `>= x`.

---

# 13. Hash Map — When to Use

Think:

> **"I know the key; give me the associated value quickly."**

Common uses:

```text
Frequency counting
Seen-before checks
Two Sum
Caching
Counting pairs
Mapping IDs to objects
Grouping values
```

Typical average complexity:

```text
Lookup   O(1)
Insert   O(1)
Delete   O(1)
```

Worst case can be `O(n)`.

Use `map` instead when you need:

```text
Sorted keys
Ordered traversal
lower_bound / upper_bound
```

---

# 14. Stack / Queue / Deque

## Stack — LIFO

```cpp
stack<int> st;

st.push(x);
st.pop();
st.top();

st.empty();
st.size();
```

Common uses:

```text
Parentheses
Undo operations
DFS
Monotonic stack
Expression parsing
```

## Queue — FIFO

```cpp
queue<int> q;

q.push(x);
q.pop();

q.front();
q.back();

q.empty();
q.size();
```

Common uses:

```text
BFS
Scheduling
Level-order traversal
```

## Deque

Double-ended queue:

```cpp
deque<int> dq;

dq.push_front(x);
dq.push_back(x);

dq.pop_front();
dq.pop_back();

dq.front();
dq.back();
```

Useful for:

```text
Sliding window
Monotonic queue
Double-ended processing
```

---

# 15. Priority Queue — Heap

## Max heap

```cpp
priority_queue<int> pq;

pq.push(x);
pq.top();
pq.pop();
```

`top()` is the largest element.

## Min heap

```cpp
priority_queue<int, vector<int>, greater<int>> pq;
```

`top()` is the smallest element.

Complexity:

```text
top     O(1)
push    O(log n)
pop     O(log n)
```

Common uses:

```text
Top K
Kth largest/smallest
Dijkstra
Scheduling
Merge K sorted lists
Greedy algorithms
```

---

# 16. Iterators

An iterator behaves somewhat like a pointer into a container.

```cpp
auto it = v.begin();

cout << *it;
```

Useful:

```cpp
v.begin();
v.end();

s.begin();
s.end();

mp.begin();
mp.end();
```

### Find

```cpp
auto it = find(v.begin(), v.end(), x);

if (it != v.end()) {
    cout << *it;
}
```

### Distance

```cpp
int index = distance(v.begin(), it);
```

For a vector this is `O(1)`.

For some other containers it can be `O(n)`.

---

# 17. `<algorithm>` Essentials

## Sorting

```cpp
sort(v.begin(), v.end());

sort(v.rbegin(), v.rend());
```

Custom comparator:

```cpp
sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;
});
```

## Search

```cpp
find(v.begin(), v.end(), x);

count(v.begin(), v.end(), x);

binary_search(v.begin(), v.end(), x);
```

`binary_search` requires sorted data.

## Binary-search helpers

```cpp
auto it = lower_bound(v.begin(), v.end(), x);
auto it = upper_bound(v.begin(), v.end(), x);
```

For a sorted vector:

```text
lower_bound → first element >= x
upper_bound → first element > x
```

Convert iterator to index:

```cpp
int index = lower_bound(v.begin(), v.end(), x) - v.begin();
```

## Min / max

```cpp
min(a, b);
max(a, b);

*min_element(v.begin(), v.end());
*max_element(v.begin(), v.end());
```

## Reverse

```cpp
reverse(v.begin(), v.end());
```

## Permutations

```cpp
next_permutation(v.begin(), v.end());
prev_permutation(v.begin(), v.end());
```

## Swap

```cpp
swap(a, b);
```

---

# 18. Removing Duplicates from a Vector

`unique()` moves duplicates to the end. It does **not** resize the vector.

Correct pattern:

```cpp
sort(v.begin(), v.end());

v.erase(unique(v.begin(), v.end()), v.end());
```

This leaves one copy of each value.

---

# 19. `<numeric>` Essentials

```cpp
#include <numeric>

long long sum = accumulate(v.begin(), v.end(), 0LL);

iota(v.begin(), v.end(), 0);
// 0 1 2 3 ...

gcd(a, b);
lcm(a, b);
```

`gcd` and `lcm` are available from C++17.

---

# 20. Lambdas

Anonymous functions are extremely useful for sorting.

```cpp
sort(v.begin(), v.end(), [](int a, int b) {
    return a < b;
});
```

Sort pairs by second value:

```cpp
sort(v.begin(), v.end(), [](const auto& a, const auto& b) {
    return a.second < b.second;
});
```

Capture variables:

```cpp
int x = 10;

auto f = [x](int y) {
    return x + y;
};
```

Capture by reference:

```cpp
auto f = [&x](int y) {
    x += y;
};
```

---

# 21. Structured Bindings — C++17

```cpp
pair<int, int> p = {10, 20};

auto [a, b] = p;
```

Very useful for maps:

```cpp
for (auto& [key, value] : mp) {
    cout << key << ' ' << value << '\n';
}
```

---

# 22. Sorting Custom Objects

```cpp
struct Person {
    string name;
    int age;
};

vector<Person> people;

sort(people.begin(), people.end(),
     [](const Person& a, const Person& b) {
         return a.age < b.age;
     });
```

For multiple criteria:

```cpp
sort(people.begin(), people.end(),
     [](const Person& a, const Person& b) {
         if (a.age != b.age)
             return a.age < b.age;

         return a.name < b.name;
     });
```

---

# 23. Bit Manipulation

## Operators

```cpp
x & y;   // AND
x | y;   // OR
x ^ y;   // XOR
~x;      // NOT

x << n;  // left shift
x >> n;  // right shift
```

## Common bit tricks

Check bit `i`:

```cpp
if (x & (1LL << i)) {
    // bit is set
}
```

Set bit:

```cpp
x |= (1LL << i);
```

Clear bit:

```cpp
x &= ~(1LL << i);
```

Toggle bit:

```cpp
x ^= (1LL << i);
```

Remove lowest set bit:

```cpp
x &= (x - 1);
```

Get lowest set bit:

```cpp
x & -x
```

## Builtins

```cpp
__builtin_popcount(x);
__builtin_popcountll(x);

__builtin_clz(x);
__builtin_ctz(x);
```

Be careful: `clz(0)` and `ctz(0)` are not valid to use blindly; handle zero first.

## `bitset`

```cpp
bitset<32> b(x);

b.count();
b.set(i);
b.reset(i);
b.flip(i);

b.test(i);
```

---

# 24. Integer Limits & Overflow

```cpp
INT_MAX;
INT_MIN;

LLONG_MAX;
LLONG_MIN;
```

Or:

```cpp
numeric_limits<int>::max();
numeric_limits<long long>::max();
```

## Important

This can overflow before assignment:

```cpp
long long x = a * b;
```

if `a` and `b` are both `int`.

Force 64-bit arithmetic:

```cpp
long long x = 1LL * a * b;
```

For large sums:

```cpp
long long sum = accumulate(v.begin(), v.end(), 0LL);
```

Do not use floating-point `1e18` when you need an exact integer sentinel.

Prefer:

```cpp
const long long INF = LLONG_MAX / 4;
```

---

# 25. Graph Representation

## Unweighted adjacency list

```cpp
vector<vector<int>> adj(n);

adj[u].push_back(v);
adj[v].push_back(u); // undirected
```

## Weighted graph

```cpp
vector<vector<pair<int, int>>> adj(n);

adj[u].push_back({v, weight});
```

or:

```cpp
using Edge = pair<int, int>; // {neighbor, weight}
```

## Edge list

```cpp
vector<tuple<int, int, int>> edges;
// {u, v, weight}
```

Useful for Kruskal and Bellman-Ford.

---

# 26. BFS

Breadth-first search.

Useful for:

```text
Unweighted shortest path
Level-order traversal
Connected components
Minimum number of moves
```

```cpp
vector<bool> visited(n, false);
queue<int> q;

q.push(start);
visited[start] = true;

while (!q.empty()) {
    int u = q.front();
    q.pop();

    for (int v : adj[u]) {
        if (!visited[v]) {
            visited[v] = true;
            q.push(v);
        }
    }
}
```

## BFS distance

```cpp
vector<int> dist(n, -1);
queue<int> q;

dist[start] = 0;
q.push(start);

while (!q.empty()) {
    int u = q.front();
    q.pop();

    for (int v : adj[u]) {
        if (dist[v] == -1) {
            dist[v] = dist[u] + 1;
            q.push(v);
        }
    }
}
```

---

# 27. DFS

## Recursive

```cpp
void dfs(
    int u,
    const vector<vector<int>>& adj,
    vector<bool>& visited
) {
    visited[u] = true;

    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v, adj, visited);
        }
    }
}
```

## Iterative

```cpp
stack<int> st;
st.push(start);

while (!st.empty()) {
    int u = st.top();
    st.pop();

    if (visited[u])
        continue;

    visited[u] = true;

    for (int v : adj[u]) {
        if (!visited[v]) {
            st.push(v);
        }
    }
}
```

> Recursive DFS can overflow the call stack on very deep graphs. Use iterative DFS when depth may be very large.

---

# 28. Tree Traversals

For a binary tree:

```cpp
void inorder(Node* root) {
    if (!root) return;

    inorder(root->left);

    // process root

    inorder(root->right);
}
```

Patterns:

```text
Preorder  → root, left, right
Inorder   → left, root, right
Postorder → left, right, root
```

For a BST:

> **Inorder traversal produces sorted order.**

---

# 29. Binary Search

Basic pattern:

```cpp
int binarySearch(const vector<int>& a, int target) {
    int lo = 0;
    int hi = (int)a.size() - 1;

    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;

        if (a[mid] == target)
            return mid;

        if (a[mid] < target)
            lo = mid + 1;
        else
            hi = mid - 1;
    }

    return -1;
}
```

Avoid:

```cpp
int mid = (lo + hi) / 2;
```

when integer overflow is possible.

Prefer:

```cpp
int mid = lo + (hi - lo) / 2;
```

---

# 30. Prefix Sums

For range-sum queries:

```cpp
vector<long long> prefix(n + 1);

for (int i = 0; i < n; ++i) {
    prefix[i + 1] = prefix[i] + a[i];
}
```

Sum `[l, r]`:

```cpp
long long sum = prefix[r + 1] - prefix[l];
```

Complexity:

```text
Build: O(n)
Query: O(1)
```

---

# 31. Difference Array

Useful when repeatedly adding a value to a range.

```cpp
vector<long long> diff(n + 1);

diff[l] += x;
diff[r + 1] -= x;
```

Then reconstruct with a prefix sum.

---

# 32. Common DSA Patterns

## Two Pointers

Usually useful for:

```text
Sorted arrays
Pair problems
Partitioning
Palindromes
```

Typical shape:

```cpp
int l = 0;
int r = n - 1;

while (l < r) {
    // reason about a[l] and a[r]

    if (...) ++l;
    else --r;
}
```

## Sliding Window

Useful for contiguous subarrays/substrings.

```cpp
int l = 0;

for (int r = 0; r < n; ++r) {
    // add a[r]

    while (/* window invalid */) {
        // remove a[l]
        ++l;
    }

    // process window
}
```

## Fast / Slow Pointers

Common for:

```text
Linked-list cycles
Finding middle of linked lists
Some sequence problems
```

## Monotonic Stack

Common for:

```text
Next greater element
Next smaller element
Largest rectangle
Temperature-style problems
```

Typical pattern:

```cpp
stack<int> st;

for (int i = 0; i < n; ++i) {
    while (!st.empty() && a[st.top()] < a[i]) {
        // process st.top()
        st.pop();
    }

    st.push(i);
}
```

## Heap

Think:

> "I repeatedly need the smallest/largest remaining item."

## Hash Map

Think:

> "I need fast lookup by key."

## Union-Find / DSU

Think:

> "I need to dynamically merge groups and ask whether two elements belong to the same group."

---

# 33. Useful DSU / Union-Find Template

```cpp
struct DSU {
    vector<int> parent;
    vector<int> size;

    DSU(int n) : parent(n), size(n, 1) {
        iota(parent.begin(), parent.end(), 0);
    }

    int find(int x) {
        if (parent[x] == x)
            return x;

        return parent[x] = find(parent[x]);
    }

    bool unite(int a, int b) {
        a = find(a);
        b = find(b);

        if (a == b)
            return false;

        if (size[a] < size[b])
            swap(a, b);

        parent[b] = a;
        size[a] += size[b];

        return true;
    }
};
```

With path compression + union by size/rank:

```text
Amortized ≈ O(α(n))
```

which is effectively constant for practical input sizes.

---

# 34. Useful Math

## Absolute value

```cpp
abs(x);
llabs(x);
```

## Power

```cpp
pow(x, y);
```

For integer exponentiation, don't blindly use `pow()` when exact integer arithmetic matters. Use binary exponentiation.

## Integer exponentiation

```cpp
long long binpow(long long a, long long b) {
    long long result = 1;

    while (b > 0) {
        if (b & 1)
            result *= a;

        a *= a;
        b >>= 1;
    }

    return result;
}
```

---

# 35. Modular Arithmetic

Common pattern:

```cpp
const long long MOD = 1'000'000'007;

x %= MOD;
```

Be careful with negative values:

```cpp
x = (x % MOD + MOD) % MOD;
```

For multiplication:

```cpp
long long result = (a * b) % MOD;
```

This is safe only if `a * b` fits in `long long`.

For larger ranges, use `__int128`:

```cpp
long long result = (__int128)a * b % MOD;
```

---

# 36. Custom Hash for `pair`

Some standard-library versions do not provide a default hash for `pair`.

A common approach:

```cpp
struct PairHash {
    size_t operator()(const pair<int, int>& p) const {
        return hash<long long>()(
            (static_cast<long long>(p.first) << 32) ^
            static_cast<unsigned int>(p.second)
        );
    }
};

unordered_map<pair<int, int>, int, PairHash> mp;
```

For simple coordinate problems, an alternative is to encode coordinates into a single integer when the bounds make that safe.

---

# 37. Lambda Comparators — Important Rule

A comparator should describe **strict weak ordering**.

Good:

```cpp
return a < b;
```

Bad:

```cpp
return a <= b;
```

For sorting, don't write a comparator that returns `true` when elements are equal.

---

# 38. `const` — Quick Reference

```cpp
const int x = 10;
```

Cannot modify `x`.

```cpp
const vector<int>& v
```

Cannot modify `v` through this reference and avoids copying.

```cpp
int* const p
```

Pointer itself cannot change.

```cpp
const int* p
```

Value pointed to cannot be modified through `p`.

For DSA, the most common form is:

```cpp
const vector<int>& v
```

---

# 39. Copy vs Reference

This:

```cpp
void solve(vector<int> v)
```

copies the vector.

This:

```cpp
void solve(const vector<int>& v)
```

does not copy it.

This:

```cpp
void solve(vector<int>& v)
```

does not copy it and allows modification.

For large containers, accidentally copying can turn an otherwise efficient algorithm into something much slower.

---

# 40. Move Semantics — Basic Idea

```cpp
vector<int> a = {1, 2, 3};

vector<int> b = move(a);
```

`b` takes ownership of resources from `a`.

After moving, `a` is still valid but its contents should not be assumed.

For normal DSA problems, you rarely need to explicitly call `move()`.

---

# 41. Smart Pointers

For general C++:

```cpp
unique_ptr<T>
shared_ptr<T>
weak_ptr<T>
```

Example:

```cpp
auto p = make_unique<int>(42);
```

For learning data structures, you will often intentionally use raw pointers:

```cpp
Node* next;
```

because understanding ownership and pointer manipulation is part of the exercise.

In production C++, prefer RAII and smart pointers where appropriate.

---

# 42. Classes / Structs

```cpp
struct Node {
    int value;
    Node* next;

    Node(int value) : value(value), next(nullptr) {}
};
```

Use:

```cpp
Node* node = new Node(5);
```

But remember to understand ownership and deletion when using raw `new`.

---

# 43. Memory Basics

```text
Stack
 └── local variables / function call frames

Heap
 └── dynamically allocated objects

Static storage
 └── globals / static variables

Code
 └── executable instructions
```

For DSA, understand the distinction between:

```cpp
int x = 5;           // automatic storage

int* p = new int(5); // dynamic allocation
delete p;
```

Prefer automatic storage and RAII where possible.

---

# 44. Avoiding Common C++ Bugs

## Out-of-bounds

Bad:

```cpp
for (int i = 0; i <= n; ++i)
```

Usually:

```cpp
for (int i = 0; i < n; ++i)
```

## Signed / unsigned warnings

`vector::size()` returns an unsigned type.

Often:

```cpp
for (int i = 0; i < (int)v.size(); ++i)
```

is convenient in DSA code.

## Iterator invalidation

Operations such as `vector::push_back()` can invalidate iterators/references if reallocation occurs.

Don't keep an iterator across a potentially reallocating operation unless you understand the rules.

## Dangling pointers

Never use a pointer/reference after the object it refers to has been destroyed or moved in a way that invalidates it.

---

# 45. Complexity Quick Reference

| Structure | Access | Search | Insert | Delete |
|---|---:|---:|---:|---:|
| `vector` | O(1) | O(n) | O(1) amortized at end | O(n) |
| `array` | O(1) | O(n) | — | — |
| `deque` | O(1) | O(n) | O(1) ends | O(1) ends |
| `list` | O(n) | O(n) | O(1) at known iterator | O(1) at known iterator |
| `set` | — | O(log n) | O(log n) | O(log n) |
| `map` | — | O(log n) | O(log n) | O(log n) |
| `unordered_set` | — | O(1) avg | O(1) avg | O(1) avg |
| `unordered_map` | — | O(1) avg | O(1) avg | O(1) avg |
| `stack` | — | — | O(1) | O(1) |
| `queue` | — | — | O(1) | O(1) |
| `priority_queue` | — | — | O(log n) | O(log n) |

For `priority_queue`, access to the top element is `O(1)`.

---

# 46. Common Algorithm Complexities

| Algorithm | Typical complexity |
|---|---:|
| Linear search | O(n) |
| Binary search | O(log n) |
| Bubble sort | O(n²) |
| Insertion sort | O(n²) |
| Merge sort | O(n log n) |
| Heap sort | O(n log n) |
| Quick sort | O(n log n) average |
| BFS | O(V + E) |
| DFS | O(V + E) |
| Dijkstra with binary heap | O((V + E) log V) |
| Bellman-Ford | O(VE) |
| Floyd-Warshall | O(V³) |
| Kruskal | O(E log E) |
| Prim with heap | O(E log V) |

Always derive complexity from the implementation rather than relying only on memorized tables.

---

# 47. Common DSA Decision Guide

### Need fast lookup by key?

```text
unordered_map
unordered_set
```

### Need sorted keys?

```text
map
set
```

### Need duplicates + sorted order?

```text
multiset
```

### Need dynamic sequential storage?

```text
vector
```

### Need LIFO?

```text
stack
```

### Need FIFO?

```text
queue
```

### Need both ends?

```text
deque
```

### Need repeated min/max?

```text
priority_queue
```

### Need prefix searching?

```text
Trie
```

### Need connectivity / merging groups?

```text
DSU
```

### Need range sums?

```text
Prefix Sum
Fenwick Tree
Segment Tree
```

### Need shortest path?

```text
Unweighted → BFS
Non-negative weights → Dijkstra
Negative edges → Bellman-Ford
All pairs → Floyd-Warshall
```

---

# 48. Debugging

## `cerr`

Doesn't interfere with normal output:

```cpp
cerr << "x = " << x << '\n';
```

## Conditional debugging

```cpp
#ifdef LOCAL
#define debug(x) cerr << #x << " = " << x << '\n'
#else
#define debug(x)
#endif
```

Compile with:

```bash
g++ -DLOCAL main.cpp -o main
```

Then:

```cpp
debug(x);
```

prints only when `LOCAL` is defined.

## Assertions

```cpp
#include <cassert>

assert(x >= 0);
```

Useful for checking assumptions while developing.

---

# 49. Useful Container Printing

```cpp
for (const auto& x : v)
    cerr << x << ' ';

cerr << '\n';
```

For a pair:

```cpp
cerr << '(' << p.first << ", " << p.second << ")\n";
```

---

# 50. Common Competitive Programming Template

```cpp
#include <bits/stdc++.h>
using namespace std;

using ll = long long;
using pii = pair<int, int>;

const ll INF = LLONG_MAX / 4;
const ll MOD = 1'000'000'007;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> a(n);

    for (int& x : a)
        cin >> x;

    // solve

    return 0;
}
```

---

# 51. Common C++ Gotchas

## `=` vs `==`

```cpp
if (x == 5) // comparison
```

not:

```cpp
if (x = 5)  // assignment
```

## Integer division

```cpp
5 / 2 == 2
```

Use:

```cpp
5.0 / 2
```

for floating-point division.

## Negative modulo

```cpp
-3 % 5 == -3
```

Normalize when necessary:

```cpp
((x % MOD) + MOD) % MOD
```

## Empty container

Don't do:

```cpp
v.back();
```

without checking that `v` isn't empty.

## Dereferencing `end()`

Never:

```cpp
*container.end();
```

`end()` points one position past the valid range.

## `vector<bool>`

`vector<bool>` is a special packed representation rather than a normal `vector<T>`.

Usually fine for visited arrays:

```cpp
vector<bool> visited(n);
```

but use:

```cpp
vector<char>
```

if you specifically want ordinary byte-like storage.

---

# 52. C++ DSA Mental Checklist

When solving a problem:

```text
1. What is the input?
2. What is the output?
3. What are the constraints?
4. What is the brute-force solution?
5. What is the brute-force complexity?
6. Where is the bottleneck?
7. What information is repeatedly needed?
8. Can a data structure eliminate repeated work?
9. Is the input sorted or sortable?
10. Is there a graph/tree structure?
11. Is there overlapping subproblem structure?
12. Can I use greedy reasoning?
13. Can I use two pointers?
14. Can I use a sliding window?
15. Can I use prefix sums?
16. Can I use hashing?
17. Can I use a heap?
18. Can I use binary search?
19. What are the edge cases?
20. What is the final time/space complexity?
```

---

# 53. DSA Pattern Recognition

| Clue | Think |
|---|---|
| "Have we seen this?" | Hash set/map |
| "Count occurrences" | Hash map |
| "Pair adds to target" | Hash map / two pointers |
| Sorted array + pair | Two pointers |
| Contiguous subarray/substring | Sliding window / prefix sum |
| "Next greater/smaller" | Monotonic stack |
| Repeated min/max | Heap |
| "Kth largest/smallest" | Heap / quickselect |
| Connected components | DFS/BFS/DSU |
| Unweighted shortest path | BFS |
| Weighted shortest path | Dijkstra / Bellman-Ford |
| Prerequisites/dependencies | Topological sort |
| Merge groups | DSU |
| All combinations | Backtracking |
| Repeated subproblems | DP |
| "Can we achieve X?" | DP / binary search on answer / greedy |
| Sorted + monotonic condition | Binary search |
| Range sum | Prefix sum / Fenwick / segment tree |
| Prefix of strings | Trie |

---

# 54. Before Using a Data Structure

Ask:

> **What operation needs to be fast?**

Examples:

```text
Fast random access
→ vector

Fast key lookup
→ unordered_map

Fast sorted lookup
→ map

Fast minimum/maximum
→ priority_queue

Fast range queries
→ Fenwick / Segment Tree

Fast connectivity
→ DSU

Fast prefix lookup
→ Trie
```

Don't choose a data structure because you recognize its name.

Choose it because its **complexity matches the operations your problem requires**.

---

# 55. Essential C++ DSA Habits

Prefer:

```cpp
'\n'
```

over:

```cpp
endl
```

Prefer:

```cpp
using ll = long long;
```

over:

```cpp
#define ll long long
```

Prefer:

```cpp
const vector<int>& v
```

when a function should read a large vector without copying it.

Prefer:

```cpp
nullptr
```

over:

```cpp
NULL
```

Prefer:

```cpp
lo + (hi - lo) / 2
```

for binary search.

Prefer:

```cpp
0LL
```

as the initial value when accumulating into `long long`.

Use:

```cpp
reserve()
```

when you know approximately how large a vector will become.

---

# 56. The Most Important Things to Memorize

You do **not** need to memorize the entire C++ standard library.

Memorize these:

```text
vector
string
pair
map
unordered_map
set
unordered_set
stack
queue
deque
priority_queue

sort
find
count
reverse
lower_bound
upper_bound
min_element
max_element
accumulate
iota

BFS
DFS
binary search
two pointers
sliding window
prefix sums
```

Everything else can be looked up until it becomes familiar.

---

# 57. Final Quick Reference

```text
VECTOR
vector<int> v;
v.push_back(x);
v.pop_back();
v.size();
v[i];

HASH MAP
unordered_map<int, int> mp;
mp[x]++;
mp.find(x);
mp.count(x);
mp.erase(x);

SET
set<int> s;
s.insert(x);
s.erase(x);
s.count(x);
s.lower_bound(x);

STACK
stack<int> st;
st.push(x);
st.pop();
st.top();

QUEUE
queue<int> q;
q.push(x);
q.pop();
q.front();

HEAP
priority_queue<int> maxHeap;
priority_queue<int, vector<int>, greater<int>> minHeap;

SORT
sort(v.begin(), v.end());

BINARY SEARCH
lower_bound(v.begin(), v.end(), x);
upper_bound(v.begin(), v.end(), x);

SUM
accumulate(v.begin(), v.end(), 0LL);

REVERSE
reverse(v.begin(), v.end());

GRAPH
vector<vector<int>> adj(n);

BFS
queue<int> q;

DFS
function<void(int)> dfs = [&](int u) {
    ...
};

PAIR
pair<int,int> p = {a, b};

LAMBDA
[](int a, int b) {
    return a < b;
};

LONG LONG
long long x;
1LL * a * b;

INF
const long long INF = LLONG_MAX / 4;
```

---

# 58. The Bigger Picture

This cheatsheet covers the **C++ you need at your fingertips for DSA**.

It does not replace learning:

```text
Data structures
Algorithms
Complexity analysis
Proofs
Recursion
Dynamic programming
Graph theory
Greedy algorithms
Discrete mathematics
```

The goal is to make C++ disappear as a barrier.

You want to reach the point where, when solving an algorithm problem, you're thinking:

> **"What algorithm solves this?"**

rather than:

> **"How do I write this in C++?"**

That is when the language becomes a tool rather than the subject.
