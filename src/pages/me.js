import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const mePage = () => (
  <Layout>
    <div className={"text-center"}>
      <SEO title="درباره من"/>
      <h1>سلام، من اشکان هستم</h1>
      <p>من عاشق یادگیری همه چیزی مخصوصابرنامه نویسی و الکترونیک هستم </p>
      <p>از تجربه کردن ترسی ندارم و علاقه مند به پیشترفت بیشتر هستم.</p>
      <p>من درحال حاظر به صورت فریلنسری کار برنامه نویسی انجام میدم و روی یکسری پروژه متن باز مشغول به فعالیت هستم و از ایده های متن باز حمایت میکنم.</p>

      <Link to="/" className={'mt-3 display-block btn'}>بازگذشت به صفحه اصلی</Link>
    </div>

  </Layout>
)

export default mePage
