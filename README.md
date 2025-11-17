# **TypeScript এ `keyof` কীওয়ার্ডের ব্যবহার — সহজ ও পরিষ্কার ব্যাখ্যা**

TypeScript একটি শক্তিশালী টাইপ-সেফটি ভিত্তিক ভাষা, যেখানে কোডকে নির্ভুল এবং নিরাপদ করতে বিভিন্ন সুবিধা দেয়। এই সুবিধাগুলোর মধ্যে **`keyof`** একটি অত্যন্ত গুরুত্বপূর্ণ কীওয়ার্ড। এটি মূলত কোনো অবজেক্ট টাইপের **সব কীগুলোকে (keys)** নিয়ে একটি **Union Type** তৈরি করে।

এই লেখায় আমরা `keyof` এর ব্যবহার, উদাহরণ এবং কেন এটি গুরুত্বপূর্ণ—সবই সহজ ভাষায় ব্যাখ্যা করব।

---

## **`keyof` কী?**

**`keyof` হলো একটি অপারেটর**, যা কোনো interface বা object type-এর **সকল property name** কে **string literal union type** আকারে রিটার্ন করে।

অর্থাৎ, আপনি যদি কোনো object-এর কী-গুলোকে টাইপ হিসেবে ব্যবহার করতে চান, তবে `keyof` ব্যবহার করবেন।

---

## **কেন `keyof` দরকার?**

- টাইপ-সেফ অ্যাক্সেস তৈরি করতে  
- কোডে ভুল property নাম ব্যবহার আটকাতে  
- Dynamic ভাবে object properties ব্যবহার করতে  
- Generic function আরও শক্তিশালী করতে  

---

## **একটি সহজ উদাহরণ**

ধরা যাক আমাদের একটি User টাইপ আছে:

```ts
type User = {
  name: string;
  age: number;
  email: string;
};
```
এখন যদি আমরা keyof User ব্যবহার করি:

```ts
type UserKeys = keyof User;
```
তাহলে UserKeys এর মান হবে:
```ts
// "name" | "age" | "email"
```
অর্থাৎ এটি Union Type তৈরি করে দিয়েছে।

**ব্যবহারিক উদাহরণ: Safe Property Access Function**

আমরা একটি ফাংশন বানাচ্ছি, যেখানে শুধুমাত্র বৈধ key ব্যবহার করা যাবে।

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  name: "Niloy",
  age: 20,
  email: "niloy@gmail.com",
};

const result = getValue(user, "email"); 
const wrong = getValue(user, "phone");  