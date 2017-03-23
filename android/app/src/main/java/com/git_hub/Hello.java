package com.git_hub;

import android.os.Bundle;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import android.view.View;
import android.view.Menu;
import android.view.MenuItem;

import android.widget.ImageView;
import android.widget.TextView;

public class Hello extends Activity {
   /**
    *  private ImageView logo;
    */
      private TextView title;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hello);

      /**
      *   this.logo = (ImageView) findViewById(R.id.logo);
      *   Intent intent =new Intent(this,MyReactActivity.class);
      *    intent.putExtra("result","haha");
      *     startActivity(intent,10);
      *  this.title = (TextView) findViewById(R.id.title);
      *       title.setText(getIntent().getStringExtra("title"));
      *
      */





   }

}
