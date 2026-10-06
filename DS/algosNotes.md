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