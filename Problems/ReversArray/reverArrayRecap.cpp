#include <bits/stdc++.h>
using namespace std;

// reverse array using two pointers
vector<int> reverseArray(vector<int> a) {
    vector<int> rev = a;
    
    int right = rev.size() -1;
    int left = 0;

    while(left < right){
        int temp = rev[right]
        rev[left] = rev[right];
        rev[right] = temp;

        right --;
        left ++;
    }

    return rev;
}

vector<int> reverseArray(vector<int> a) {
    vector<int> rev = a;

    int left = 0;
    int right = rev.size() - 1;

    while(left < right){
        int temp = rev[right];
        rev[right] = rev[left];
        rev[left] = temp;

        left ++;
        right --;
    }

    return rev;
}