#include <bits/stdc++.h>
using namespace std;

//BST
struct BST {
  int data;
  BST* left;
  BST* right;
};

//Linked list 
struct Node {
  int data;
  Node* next;
};


int main() {

  //arr
  int arr[5] = {1,2,3,4,5};
  cout << arr[3] << endl;

  //BST
  BST* head = new BST{12, nullptr, nullptr};
  head->left = new BST{22, nullptr, nullptr};
  head->right = new BST{4, nullptr, nullptr};
  cout << head->left->data << endl;

  //graph

  // hashmap 
  unordered_map<string, int> people;
  people["tim"] = 12;
  cout << people["tim"] << endl;

  //Linked list
  Node* nodeHead = new Node{3, nullptr};
  nodeHead->next = new Node{23,nullptr};
  Node* cur = nodeHead;
  cout << cur->next->data << endl;

  //Queues

  //stack

  //tree


  

};