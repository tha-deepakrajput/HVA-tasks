arr = list(map(int, input().split()))

min = 0
max = 0
len = len(arr)
i = 1
while i < len : 
    if arr[i] > arr[i - 1] : 
        max = arr[i]
        min = arr[i -1]
    else : 
        max = arr[i -1]
        min = arr[i]
    i += 1
# print(min, max)
print("min : ", min - min, "max : ", max - min)