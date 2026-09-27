#include<bits/stdc++.h>
using namespace std;

struct Tree{

	int data;
	vector<Tree*> children;
};

int main(){

	Tree* head = new Tree(12);
	Tree* childA = new Tree(22);

	head->children.push_back(childA);

	cout << head->data << endl;
	cout << head->children[0]->data << endl;

	return 0;

};	
