# You have to change the programming language to be able to pass the test, like python3,
# at the moment of uploading the file, it is not possible to pass the test with JavaScript.
def findZigZagSequence(a, n):
    a.sort()
    mid = int(n / 2)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return
