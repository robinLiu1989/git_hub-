package com.git_hub;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

/**
 * Created by Administrator on 2017/3/22 0022.
 */

public class TestJumpActivity extends AppCompatActivity {
    private int resultCode = -1;
    Button bt;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_testjump);
        bt = (Button)findViewById(R.id.button);
        bt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent mIntent = new Intent();
                mIntent.putExtra("result","1000");
                TestJumpActivity.this.setResult(resultCode, mIntent);
                finish();
            }
        });


    }
}
