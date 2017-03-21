package com.git_hub;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;


import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Administrator on 2016/10/30.
 */

public class Test {

     public void getTime(Context ctx)
     {
       SimpleDateFormat formatDate=new SimpleDateFormat("yyyy年MM月dd日  HH:mm:ss");
       Date date=new Date(System.currentTimeMillis());   //获取当前时间
       String s=formatDate.format(date);
       Log.e("HHH",s);
       Toast.makeText(ctx,s,Toast.LENGTH_SHORT).show();
     }
}