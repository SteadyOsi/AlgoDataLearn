#include <bits/stdc++.h>
using namespace std;

vector<int> reverseArray(vector<int> a) {
    vector<int> rev = a;
    
    int left = 0;
    int right = rev.size() -1;
    
    while(left < right){
        int temp = rev[left];
        rev[left] = rev[right];
        rev[right] = temp;
        
        left ++;
        right --;
    }
    
    return rev;
    
}

int main(){

  vector<int> arr = {1,2,3,4,5};
  vector<int> reversed = reverseArray(arr);

  for(int i = 0; i < reversed.size(); i++){
      cout << reversed[i] << " ";
  }

  return 0;
};