#include <bits/stdc++.h>
using namespace std;

int main(){
  
  int arr[6] = {1, 2, 3, 4, 5, 6};

  int left = 0;
  int right = sizeof(arr)/sizeof(arr[0]) - 1;

  while(left < right){
    
    cout << arr[left] << " " << arr[right] << endl;

    left++;
    right--;
  };

  return 0;

};
