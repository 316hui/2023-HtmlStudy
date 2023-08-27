h, k, d= input().split()

h=int(h)
k=int(k)
d=str(d)

if d=='L':
    for i in range (0, h):
        print(" "*i, end="")
        print("*"*k)
if d=='R':
    for i in range (h, 0, -1):
        print(" "*i, end="")
        print("*"*k)
    
    



