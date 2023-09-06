document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("submit");
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const result = document.getElementById("resultData");

  submit.addEventListener("click", function (e) {
    e.preventDefault(); // جلوگیری از ارسال فرم و بارگیری صفحه مجددا

    // دریافت مقادیر ورودی از فیلدهای وزن و قد
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // بررسی صحت مقادیر ورودی
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      result.innerHTML = "لطفاً وزن و قد معتبر وارد کنید.";
      return;
    }

    // محاسبه BMI
    const bmi = weight / (height / 100) ** 2;

    // نمایش نتیجه BMI در داخل <div> با id "result"
    result.innerHTML = ` Your BMI:  ${bmi.toFixed(2)}`;
  });
});
