#include <bits/stdc++.h>
using namespace std;

int main() {

	queue<int> q;
	
	q.push(1);
	q.push(22);
	q.push(3);

	cout << q.front() << endl;
	cout << q.back() << endl;


	q.pop(); // hello there bitch.

	cout << q.front() << endl;

	return 0;
};
