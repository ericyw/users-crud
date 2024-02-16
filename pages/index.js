import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <h1 class="text-xl text-center font-bold text-gray-900">Welcome to Quefy</h1>
        <Link href="/add" class="block w-full max-w-xs mx-auto bg-pink-500 hover:bg-pink-600 focus:bg-pink-600 text-white rounded-lg px-10 py-3">新建用户</Link>
        <Link href="/users" class="block w-full max-w-xs mx-auto bg-pink-500 hover:bg-pink-600 focus:bg-pink-600 text-white rounded-lg px-10 py-3">查询用户</Link>
      </div>
      {/* <form action="/add" method="POST">
          <div>
              <label class="block pb-2 font-semibold" for="userName">用户名</label>
              <input type="text" id="userName" name="userName" class="w-full py-2 px-3 rounded shadow-inner bg-gray-50 border focus:border-blue-500" placeholder1="请输入用户名" />
          </div>
          <div class="mt-4">
              <label class="block pb-2 font-semibold" for="password">密码</label>
              <input type="text" id="password" name="password" class="w-full py-2 px-3 rounded shadow-inner bg-gray-50 border focus:border-blue-500" placeholder1="请输入密码" />
          </div>
          <div class="mt-4">
              <label class="block pb-2 font-semibold" for="fullName">姓名</label>
              <input type="text" id="fullName" name="fullName" class="w-full py-2 px-3 rounded shadow-inner bg-gray-50 border focus:border-blue-500" placeholder1="请再次输入密码" />
          </div>
          <div class="mt-4">
              <label class="block pb-2 font-semibold" for="phoneNumer">手机号</label>
              <input type="text" id="phoneNumer" name="phoneNumer" class="w-full py-2 px-3 rounded shadow-inner bg-gray-50 border focus:border-blue-500" placeholder="请输入手机号" />
          </div>
          <div class="mt-4">
              <label class="block pb-2 font-semibold" for="email">电子邮箱</label>
              <input type="text" id="email" name="email" class="w-full py-2 px-3 rounded shadow-inner bg-gray-50 border focus:border-blue-500" placeholder1="请输入电子邮箱" />
          </div>
          
          <div class="mt-4">
            <label for="birthDate" class="block pb-2 font-semibold">请选择生日日期</label>
            <input type="date" id="birthDate" name="birthDate" />
          </div>

          <div class="mt-4">
              <p>请选择性别</p>
              <label class="text-xs align-middle text-gray-500" for="gender">男</label>
              <input type="radio" id="male" name="gender" class="text-xs align-middle text-gray-500" value="male"/>
              <label class="text-xs align-middle text-gray-500" for="gender">女</label>
              <input type="radio" id="female" name="gender" class="text-xs align-middle text-gray-500" value="female"/>
          </div>

          <div class="mt-4">
            <p class="block pb-2 font-semibold" for="status">状态</p>
            <input type="radio" id="active" name="status" class="align-middle" />
            <label for="status" value="active" class="text-xs align-middle text-gray-500">启用</label>
            <input type="radio" id="inactive" name="status" class="align-middle" />
            <label for="status" value="inactive" class="text-xs align-middle text-gray-500">禁用</label>
          </div>

          <div class="mt-4">
            <p class="block pb-2 font-semibold" for="type">类型</p>
            <input type="radio" id="formal" name="type" class="align-middle" />
            <label for="type" class="text-xs align-middle text-gray-500">正社员</label>
            <input type="radio" id="informal" name="type" class="align-middle" />
            <label for="type" class="text-xs align-middle text-gray-500">契约社员</label>
          </div>

          <div class="mt-4">
              <label class="block pb-2 font-semibold" for="desc">个人详细说明</label>
              <textarea id="desc" name="desc" class="w-full py-2 px-3 rounded shadow-inner bg-gray-50 border focus:border-blue-500" />
          </div>

          <div class="mt-6">
              <input type="submit" value= "创建用户" class="block w-full max-w-xs mx-auto bg-pink-500 hover:bg-pink-600 focus:bg-pink-600 text-white rounded-lg px-10 py-3" />

          </div>
          <div class="mt-6">
              <Link href="/query" class="block w-full max-w-xs mx-auto bg-pink-500 hover:bg-pink-600 focus:bg-pink-600 text-white rounded-lg px-10 py-3">
                <em>查询用户</em></Link>
              
          </div>
        
      </form> */}
        {/* <div class="mt-6 text-center text-xs text-gray-500">已有账号？<a class="text-blue-500 hover:text-blue-700" href="javascript:">立即登录</a></div> */}
      </div>
  );
}
