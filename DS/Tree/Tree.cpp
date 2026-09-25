#include <bits/stdc++.h>
using namespace std;

struct treeNode{
	int data;

	treeNode* left;
	treeNode* right;
};

int main(){
	
	treeNode* head = new treeNode{10, nullptr, nullptr};


	treeNode* current = head;
	
	cout << current->data << endl;

	return 0;

};
