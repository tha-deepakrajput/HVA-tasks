arr = list(map(int, input().split()))
t = int(input("Target input : "))

n = len(arr)
i = 0
while i < n : 
    j  = i + 1
    while j < n : 
        if arr[i] + arr[j] == t: 
            print(arr[i], arr[j])
        j += 1
    i += 1


    