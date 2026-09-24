#include <bits/stdc++.h>
using namespace std;

int main(){

	stack<int> st;

	st.push(23);
	st.push(22);

	cout << st.top() << endl;

	st.pop();

	cout << st.top() << endl;

	return 0;
};
