# Hash Map — Palm Card

## What is it?

A **Hash Map** stores **key → value** pairs.

```text
key       value
"name" → "Joey"
"id"   → 42
```

It uses a **hash function** to convert a key into a location/bucket where the value is stored.

---

## ✅ Pros

* **Fast lookup** — average `O(1)`
* **Fast insertion** — average `O(1)`
* **Fast deletion** — average `O(1)`
* Excellent for checking whether something **exists**
* Great for **counting frequencies**
* Great for connecting related data
* Usually much faster than searching through an array

---

## ❌ Cons

* Usually **doesn't maintain sorted order**
* Uses **extra memory**
* Worst-case operations can become `O(n)` because of collisions
* Requires a good **hash function**
* More complicated internally than an array
* Not ideal when you need data in a specific order

---

# 🎯 When should I use one?

Think:

> **"Do I need very fast lookup by a key?"**

If yes → **consider a Hash Map.**

### Common Patterns

#### 1. Frequency Counting

```text
["a", "b", "a", "c", "a"]

a → 3
b → 1
c → 1
```

#### 2. Existence Checking

```text
Have I seen this number before?
```

#### 3. Two Sum

```text
number → index
```

#### 4. Mapping Relationships

```text
userID → user
word   → definition
IP     → hostname
```

#### 5. Caching

```text
input → previously calculated result
```

---

## ⚠️ Don't use a Hash Map when...

You specifically need:

* **Sorted data**
* **Min/max element efficiently**
* **Ordered traversal**
* **Range queries**

A different structure may be better:

```text
Need sorted order      → Tree / Sorted Array
Need min/max           → Heap
Need sequential data   → Array
Need prefix searching  → Trie
```

---

# 🧠 Memory Trick

> **Hash Map = "I know the key, give me the value FAST."**

```text
Lookup   → O(1) average
Insert   → O(1) average
Delete   → O(1) average
Search   → By key
Or
```
