# Array

```
#include <bits/stdc++.h>
using namespace std;

int main(){
    int varName[5] = {1,2,3,4,5};
    return 0;
}

```

# Linked List

```
#include <bits/stdc++.h>
using namespace std;

stuct Node{
    int data;
    Node* next; // pointer to next node
}

int main(){
    Node* head = new Node{23, nullptr};

    Node* cur = head;

    cout << head->data << endl;

    return 0;
}

```

# Hashmap

```
#include <bits/stdc++.h>
using namespace std;

int main(){

    unordered_map<string, int> map;

    map["dog"] = 12;

	cout << map["dog"] << endl;

	return 0;
};
```

# Queue

```
#include <bits/stdc++.h>
using namespace std;

int main(){

    queue<int> q;

    q.push(1);
    q.push(22);
    q.push(23);

    cout << q.front() << endl;
    cout << q.back() << endl;

    q.pop();

    cout << q.front() << endl;

    return 0;
};
```

# Stack

```
#include <bits/stdc++.h>
using namespace std;

int main(){

    stack<int> s;

    s.push(22);

    cout << s.top() << endl;

    return 0;
};
```

# Tree/bst

```
#include <bits/stdc++.h>
using namespace std;

stuct Tree{
    int data;

    Tree* left;
    Tree* right;
};

int main(){
    Tree* head = new Tree{10, nullptr, nullptr};

    Tree* current = head;

    cout << current->data << endl;

    return 0;
};
```

# Graph

```
#include <bits/stdc++.h>
using namespace std;

unordered_map<int, vector<int>> graph;

void addEdge(int u, int v){
    graph[u].push_back(v);
    graph[v].push_back(u);
};

int main(){

    cout << graph[0][0] << endl;

    return 0;
};
```
