#include <bits/stdc++.h>
using namespace std;

int main(){

	stack<int> st;
	queue<int> q;

	q.push(33);

	st.push(23);
	st.push(111);
	
	cout << q.front() << endl;
	cout << st.top() << endl;

	return 0;
};
