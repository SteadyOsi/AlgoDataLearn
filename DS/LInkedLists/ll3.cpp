#include <bits/stdc++.h>
using namespace std;

struct Node {

	int data;
	Node* next;

};

int main() {

	Node* head = new Node{12, nullptr};
	head->next = new Node{22, nullptr};

	Node* current = head;

	cout << current->data << endl;

};
