#include<bits/stdc++.h>
using namespace std;

//Adjacency List with unordered_map

unordered_map<int, vector<int>> graph;

void addEdge(int u, int v){

	graph[u].push_back(v);
	graph[v].push_back(u);
};

int main(){

  cout << graph[0][0] << endl;

	return 0;
};
