---
title: کالکشن در لاراول
date: 2022-06-22
---

<div class="text-right overflow-x-scroll" dir="ltr">

```php
    $collection = (new \Illuminate\Support\Collection(['ashkan', 'hasan', 'sara']));
    /**
     * map
     * @return ['ASHKAN', 'HASAN', 'SARA']
     * @descriptionاین متد یک عملیات رو روی همه ایتم های آرایه انجام مید
     */
    return $collection->map(function ($name){
        return strtoupper($name);
    });

    /**
     * search
     * @return 2
     * @description  این متد در صورت وجود ایتم مورد نظر در ارایه لوکیشن اون رو به ما میده
     */
    return $collection->search('sara');
    /**
     * contains
     * @return true or false
     * @description  این متد یه شرط روی ایتم های یه آرایه اجرا میکنه که ببینه ایم که ما میخوایم وجود داره یا نه
     */
    return $collection->contains('hasan');
    /**
     * filter
     * @return ["ashkan","hasan"]
     * @description  این متد چک میکنه ایا ایتم ما با اون شرطی که ما داریم  جوابش true میشه یانه در صورتی که اون شرط اوکی باشه نمایش میده
     */
    return $collection->filter(function ($name){
        return strlen($name) >= 5;
    });
    /**
     * first
     * @return ashkan
     * @description  این متد اولین ایتم آرایه رو به ما میده.
     */
    return $collection->first();
    /**
     * groupBy
     * @return {
     * "account-x10": [
     * {
     * "account_id": "account-x10",
     * "product": "Chair"
     * },
     * {
     * "account_id": "account-x10",
     * "product": "Bookcase"
     * }
     * ],
     * "account-x11": [
     * {
     * "account_id": "account-x11",
     * "product": "Desk"
     * }
     * ]
     * }
     * @description  این متد ایتم های آرایه رو گروه بندی میکنه.
     */
    $collection = collect([
        ['account_id' => 'account-x10', 'product' => 'Chair'],
        ['account_id' => 'account-x10', 'product' => 'Bookcase'],
        ['account_id' => 'account-x11', 'product' => 'Desk'],
    ]);

    return $collection->groupBy('account_id');
    /**
     * sort
     * @return ["ashkan","hasan","sara"]
     * @description  این متد ایتم آرایه رو مرتب میکنه.
     */
    return $collection->sort();
    return $collection->sortBy('account_id');
    return $collection->sortDesc();
    $collection->sortKeys();
    $collection->splice();
    $collection->sum();
    $collection->take();
    $collection->toArray();
    $collection->toJson();
    $collection->transform();
    $collection->undot();
    $collection->unique();

    return $collection->firstOrFail(function ($value, $key) {
        return $value == "ashkan1";
    });


    return $collection->map(function ($name) {
        return strtoupper($name);
    });
    
```

</div>