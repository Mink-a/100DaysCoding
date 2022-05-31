# 012 of 100 Days

### Object များ အလုပ်လုပ်ပုံ

- obj များ တည်ဆောက်ရန် {} ကို သုံးရသည်။
- obj သည် array ပုံစံတစ်မျိုးပင် ဖြစ်သည်။ arr သည် index zero မှ စပြီး အစဥ်လိုက် တိုးသွားသည်။
  - `let arr = [1, 3, "string"]`
  - `let obj = {name: "Mink", age: 20}`
- obj များတွင် key သည် index ဖြစ်သည်။
- arr များတွင် arr[0] ကို သုံးသလို obj များတွင်လည်း obj["name"] ကို သုံးနိုင်သည်။
- obj ကို variable တစ်ခုမှ ယူပြီး တည်ဆောက်လိုပါက `[name]: "HPotter"` နည်းအတိုင်း လုပ်နိုင်သည်။ ဥပမာ ပြပါမည်။

```javascript
let keyArray = ["title", "author", "pages"];
let valueArray = ["HPotter", "JKRolling", 432];

const resultObj = keyArray.reduce((acc, key, index) => {
  return { ...acc, [key]: valueArray[index] };
}, {});

console.log(resultObj);
```
