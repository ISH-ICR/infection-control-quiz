// ==========================================
// Firebase 설정 파일
// 파일 이름: firebase-config.js
// ==========================================

// Firebase SDK
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ==========================================
// Firebase 프로젝트 설정
// Firebase에서 제공하는 설정값으로 변경하세요
// ==========================================

const firebaseConfig = {

  apiKey: "AIzaSyDJuaH028Hw0jbHVekhSY8hrzlmsVgHpqI",

  authDomain: "icquizgame.firebaseapp.com",

  projectId: "icquizgame",

  storageBucket: "icquizgame.firebasestorage.app",

  messagingSenderId: "987272482834",

  appId: "1:987272482834:web:612b4edb47aae69ac848cb"

};


// ==========================================
// Firebase 시작
// ==========================================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// 다른 파일에서 사용할 수 있도록 내보내기

export {
  firebaseConfig,
  db
};


// ==========================================
// 관리자 비밀번호
// 원하는 비밀번호로 변경하세요
// ==========================================

export const ADMIN_PASSWORD = "ISH2801";