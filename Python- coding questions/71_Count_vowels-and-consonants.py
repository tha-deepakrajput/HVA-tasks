str = input()
vowels = ['a', 'e', 'i', 'o', 'u']

total_vowels = 0
white_space = 0
n = len(str)
i = 0 
while i < len(str) : 
    j = 0 
    while j < len(vowels) - 1 : 
        if str[i] == vowels[j] : 
            total_vowels += 1
            j += 1
            break
        elif str[i] == ' ' : 
            white_space += 1
            break
        j += 1
    i += 1
    # total_consonants += 1
print('Vowels : ', total_vowels)
print('Consonants : ', n - total_vowels - white_space)