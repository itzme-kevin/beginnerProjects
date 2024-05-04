alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
             'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
text = input()
text=[char for char in text]
msg = ''
msg = msg.join(text)

shift = int(input())

encrypted = ''
for i in range(len(text)):
    text[i] = text[i].lower()
    pos = alphabets.index(text[i])
    text[i] = alphabets[((pos+shift+1) % len(alphabets))-1]
encrypted = encrypted.join(text)
if (msg.isupper()):
    print(encrypted.upper())
else:
    print(encrypted)
