#include <bits/stdc++.h>
using namespace std;

struct Node {
  int data;
  Node* next;
};

int main() {
  Node* head = new Node{10, nullptr};
  head->next = new Node{20, nullptr};
  head->next->next = new Node{30, nullptr};

  Node* current = head;

  while (current != nullptr) {
    cout << current->data << endl;
    current = current->next;
  }


  return 0;
}