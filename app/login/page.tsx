// 封存於 2026-04-20：會員系統暫停運作。此路由僅做預防性重導，防止舊書籤或外部連結 404。
import { redirect } from 'next/navigation';

export default function LoginPage() {
  redirect('/');
}
