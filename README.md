### What is the use of the keyof keyword in TypeScript?
1.TypeScript–এ keyof হলো এমন একটি শক্তিশালী কীওয়ার্ড, যা কোনো object বা interface-এর সবগুলো property নামকে একটি union type হিসেবে প্রদান করে।

2.এটি মূলত object-এর valid key গুলো নির্ধারণ করতে সাহায্য করে। 

3.এর মাধ্যমে কোডে ভুল key ব্যবহার এড়ানো যায়, কারণ `keyof` শুধুমাত্র বৈধ key-গুলোর মধ্যেই সীমাবদ্ধ রাখে।

4.Dynamic object handling বা generic ফাংশনের ক্ষেত্রে এই ফিচার কোডকে আরও নিরাপদ ও স্মার্ট করে তোলে।

Example:

```ts
 type User = {
        name: string;
        age: number;
        email: string;
    };
    type UserKeys = keyof User; 

    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
    }
```