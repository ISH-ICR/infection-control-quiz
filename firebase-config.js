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

  apiKey: "여기에_API_KEY",

  authDomain: "여기에_AUTH_DOMAIN",

  projectId: "여기에_PROJECT_ID",

  storageBucket: "여기에_STORAGE_BUCKET",

  messagingSenderId: "여기에_MESSAGING_SENDER_ID",

  appId: "여기에_APP_ID"

};


// ==========================================
// Firebase 시작
// ==========================================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// 다른 파일에서 사용할 수 있도록 내보내기

export {
  db
};


// ==========================================
// 관리자 비밀번호
// 원하는 비밀번호로 변경하세요
// ==========================================

export const ADMIN_PASSWORD = "ISH2801";