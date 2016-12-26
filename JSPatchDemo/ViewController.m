//
//  ViewController.m
//  JSPatchDemo
//
//  Created by 王燊 on 16/12/26.
//  Copyright © 2016年 王燊. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
//    self.navigationItem
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
//    self.view addSubview:<#(nonnull UIView *)#>
    [btn addTarget:self action:@selector(asaaa) forControlEvents:UIControlEventTouchUpInside];
    [btn setTitle:@"" forState:UIControlStateNormal];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
