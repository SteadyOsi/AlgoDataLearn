#include <bits/stdc++.h>
using namespace std;

struct person {
  string name;
  int age;
  string city;
};

int main() {

	queue<person> q;
	
	q.push(person{"Joey", 23, "Sydney"});
	q.push(person{"Terry", 23, "Sydney"});
	q.push(person{"Summer", 23, "Sydney"});

	cout << q.front().name << endl;
	cout << q.back().name << endl;


	q.pop(); // hello there bitch.

	cout << q.front().name << endl;

	return 0;
};
