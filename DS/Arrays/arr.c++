#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    // code
    int n[3][3] = {
        {1,2,3},
        {3,4,5},
        {6,7,8}
    };

    int rows = sizeof(n) / sizeof(n[0]);
    int cols = sizeof(n[0]) / sizeof(n[0][0]);

    for(int i=0; i<rows; i++) {
        for(int j=0; j<cols; j++) {
            cout << n[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}