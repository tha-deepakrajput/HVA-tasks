arr = list(map(int, input().split()))

subArray = []
i = 0
while i < len(arr) :
    j = i 
    while j < len(arr) : 
        print(arr[i:j + 1])
        j += 1
    i += 1

