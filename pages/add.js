import React, { useState, useEffect, FormEvent  } from "react";
import axios from 'axios';


function Add() {
    // const [formData, setFormData] = useState({});

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    
    let handleSubmit = async (e) => {
      e.preventDefault();
      // alert(e.target);
      
      try {

        // var searchParams = new URLSearchParams()
        // searchParams.set('method','next')

        // let data = new FormData();

        // const formValues = Object.fromEntries(data.entries());
        // setFormData(formValues);
        

        // var object = {};
        //     data.forEach(function(value, key){
        //     object[key] = value;
        // });
        // var json = JSON.stringify(object);

        // console.log("formValues :    " + formValues);

        // data.append("userName", userName);
        // data.append("password", password);
        // data.append("fullName", fullName);
        // data.append("email", email);
        // data.append("phoneNumer", phoneNumer);
        // data.append("birthDate", birthDate);
        // data.append("gender", gender);
        // data.append("desc", desc);
       let data = {userName: userName,password: password,
                    fullName: password,
                    phoneNumber: phoneNumber,
                    email: email,
                    gender: gender,
                    birthDate: birthDate,
                    status: status,
                    type: type,
                    desc: desc
                  };
       
            

        let res = await fetch("http://localhost:3000/api/crud", {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        let resJson = await res.json();
        if (res.status === 200) {
          setUserName(userName);
     
        } else {

        }
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
        <div>
            <div>
                <div className="Add">
                    <form id="userForm" onSubmit={handleSubmit}>
                        <input
                        type="text"
                        value={userName}
                        placeholder="userName"
                        onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                        type="text"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                        type="text"
                        value={fullName}
                        placeholder="fullName"
                        onChange={(e) => setFullName(e.target.value)}
                        />
                        
                        <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                        type="text"
                        value={phoneNumber}
                        placeholder="phoneNumber"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />

                        <input
                        type="date"
                        value={birthDate}
                        placeholder="birthDate"
                        onChange={(e) => setBirthDate(e.target.value)}
                        />
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              value="1"
                              placeholder="gender"
                              onChange={(e) => setGender(e.target.value)}
                              />
                              male
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                             <input
                            type="radio"
                            value="2"
                            placeholder="gender"
                            onChange={(e) => setGender(e.target.value)}
                            />
                            female
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              value="1"
                              placeholder="type"
                              onChange={(e) => setType(e.target.value)}
                              />
                            formal
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              value="2"
                              placeholder="type"
                              onChange={(e) => setType(e.target.value)}
                              />
                            informal
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                          <input
                            type="radio"
                            value="1"
                            placeholder="status"
                            onChange={(e) => setStatus(e.target.value)}
                            />
                            active
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                            type="radio"
                            value="2"
                            placeholder="status"
                            onChange={(e) => setStatus(e.target.value)}
                            />
                            inactive
                          </label>
                        </div>
                        
                        <textarea
                          placeholder="desc"
                          onChange={(e) => setDesc(e.target.value)}
                        />


                        <button type="submit">Create</button>

                        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
                    </form>
                </div>
            </div>
        
        {/* <div className="Add">
        <div>
          <h1 class="text-xl text-center font-bold text-gray-900">Quefy Users</h1>
        </div>
        <form action="/add" method="POST">
            <div>
                <label class="block pb-2 font-semibold" for="userName">用户名</label>
                <input type="text" id="userName" name="userName" value={userName} class="w-full py-2 px-3 rounded shadow-inner bg-gray-50 border focus:border-blue-500" placeholder1="请输入用户名" />
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
          
          </form>
          <div class="mt-6 text-center text-xs text-gray-500">已有账号？<a class="text-blue-500 hover:text-blue-700" href="javascript:">立即登录</a></div>
        </div> */}
        </div>
    );
  }
  
export default Add;

// const Add = () => {

//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');

//     // const [data, setData] = useState({
//     //     userName: "",
//     //     password: "",
//     //     fullName: "",
//     //     phoneNumber: "",
//     //     email: "",
//     //     gender: 1,
//     //     birthDate: "",
//     //     status: 1,
//     //     type: 1,
//     //     desc: ""
//     //   });
    
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     const userData = {
//     //         userName: data.userName,
//     //         password: data.password,
//     //         fullName: data.fullName,
//     //         phoneNumber: data.phoneNumber,
//     //         email: data.email,
//     //         gender: data.gender,
//     //         birthDate: data.birthDate,
//     //         status: data.status,
//     //         type: data.type,
//     //         desc: data.desc
//     //     };
//     //     axios({
//     //         method: "post",
//     //         url: "http://localhost:3000/api/crud",
//     //         data: userData
//     //     }).then(response => {
//     //         this.setState({data: response.status});
//     //         console.log("data: " + response.status);
//     //     })
//     //     .catch(error=> {
//     //         this.setState(error, error.message);
    
//     //     });
//     //   };
//     // useEffect(() => {
//     //     fetchPosts()
//     //  }, []);

//     const addPost = (title, body) => {
//         fetch('http://localhost:3000/api/crud', {
//           method: 'POST',
//           body: JSON.stringify({
//               title: title,
//               body: body
//           }),
//            headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//           },
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             setPosts((posts) => [data, ...posts]);
//             setTitle('');
//             setBody('');
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         addPost(title, body);
//      };  


//      return (
//         <div className="app">
//            <div className="add-post-container">
//               <form onSubmit={handleSubmit}>
//                  <input type="text" className="form-control" value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                  />
//                  <textarea name="" className="form-control" id="" cols="10" rows="8" 
//                     value={body} onChange={(e) => setBody(e.target.value)} 
//                  ></textarea>
//                  <button type="submit">Add Post</button>
//               </form>
//            </div>
//            {/* ... */}
//         </div>
//      );

//     //   return (
//     //     <div>
//     //        <h4>added</h4>
//     //        <button href="/">返回</button>
//     //     </div>
//     //   );
// }


// class Add extends Component {
//     state = {
//         data: null,
//         error: null
//     }
    


    

//     // componentDidMount(req, res) {
    
//         // var formData = new FormData();
//         // formData.append("userName", req.body.userName);
//         // formData.append("password", req.body.password);
//         // formData.append("fullName", req.body.fullName);
//         // formData.append("phoneNumber", req.body.phoneNumber);
//         // formData.append("email", req.body.email);
//         // formData.append("gender", req.body.gender);
//         // formData.append("birthDate", req.body.birthDate);
//         // formData.append("status", req.body.status);
//         // formData.append("type", req.body.type);
//         // formData.append("desc", req.body.desc);
//         // console.log("req: ==========" + req);
        
//     // }

//     // render() {
//     //     const { data, error } = this.state;
    
//     //     if (error) {
//     //       return <div>Error: {error}</div>;
//     //     }
    
//     //     if (!data) {
//     //       return <div>Loading...</div>;
//     //     }
    
        // return (
        //   <div>
        //      <h4>added</h4>
        //      <button href="/">返回</button>
        //   </div>
        // );
    //   }
// }
