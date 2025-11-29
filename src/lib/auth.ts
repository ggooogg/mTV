// 从cookie获取认证信息 (服务端使用) - 始终返回有效的认证信息
export function getAuthInfoFromCookie(): {
  password?: string;
  username?: string;
  signature?: string;
  timestamp?: number;
} {
  return {
    username: 'default_user',
    timestamp: Date.now(),
  };
}

// 从cookie获取认证信息 (客户端使用) - 始终返回有效的认证信息
export function getAuthInfoFromBrowserCookie(): {
  password?: string;
  username?: string;
  signature?: string;
  timestamp?: number;
  role?: 'owner' | 'admin' | 'user';
} {
  return {
    username: 'default_user',
    role: 'user',
    timestamp: Date.now(),
  };
}
