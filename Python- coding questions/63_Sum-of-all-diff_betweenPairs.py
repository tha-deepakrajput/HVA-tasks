arr = list(map(int, input().split()))

n = len(arr)
sumOfDiff = 0
i = 0
while i < n : 
    j = i + 1 
    while j <= n - 1 : 
        if arr[i] > arr[j] : 
            sumOfDiff += arr[i] - arr[j]
        else : 
            sumOfDiff += arr[j] - arr[i]
        j += 1
    i += 1

print(sumOfDiff)