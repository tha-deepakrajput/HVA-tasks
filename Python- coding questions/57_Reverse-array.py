num = list(map(int, input().split()))

n = len(num)
j = n - 1
i = 0
while i < j : 
    t = num[i] 
    num[i] = num[j]
    num[j] = t
    i += 1
    j -= 1

print(num)
