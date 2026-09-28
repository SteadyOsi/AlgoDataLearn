#include<bits/stdc++.h>
using namespace std;

struct Node {

	int data;
	Node* left;
	Node* right;
};

int main(){

	Node* head = new Node{10, nullptr, nullptr};

	head->left = new Node{22, nullptr, nullptr};

	head->right = new Node{33, nullptr, nullptr};

	cout << head->left->data << endl;

	return 0;

};
