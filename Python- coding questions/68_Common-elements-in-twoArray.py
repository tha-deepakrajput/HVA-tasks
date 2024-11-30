n = int(input())

arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))


i = 0 
while i < len(arr1) : 
    j = 0 
    while j < len(arr2) : 
        if arr1[i] == arr2[j] : 
            print(arr1[i])
            break
        else : 
            j += 1
    i += 1