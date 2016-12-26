require('UIView, UIColor,UINavigationItem,UIButton,CGRect')
defineClass('ViewController',{
  viewDidLoad: function(){
   self.super().viewDidLoad()
   self.navigationItem().setTitle("jsPatchDemo")
   var color = UIColor.redColor()
   self.view().setBackgroundColor(color)
   var btn = UIButton.buttonWithType(0)
   var viewWidth = self.view().bounds().width
   var btnWidth = viewWidth - 40
   btn.setFrame({x:20,y:100,width:btnWidth,height:60})
   var orangeColor = UIColor.orangeColor()
   btn.setBackgroundColor(orangeColor)
   btn.addTarget_action_forControlEvents(self,'handleBtn:',1<<6)
   btn.setTitle_forState("Push",0)
   self.view().addSubview(btn)
  },
  handleBtn: function(sender) {
    var tableViewCtrl = JPTableViewController.alloc().init()
    self.navigationController().pushViewController_animated(tableViewCtrl, YES)
  }
})



defineClass('JPTableViewController : UITableViewController <UIAlertViewDelegate>', ['data'], {
  dataSource: function() {
    var data = self.data();
    if (data) return data;
    var data = [];
    for (var i = 0; i < 20; i ++) {
      data.push("cell from js " + i);
    }
    self.setData(data)
    return data;
  },
  numberOfSectionsInTableView: function(tableView) {
    return 1;
  },
  tableView_numberOfRowsInSection: function(tableView, section) {
    return self.dataSource().length;
  },
  tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
    var cell = tableView.dequeueReusableCellWithIdentifier("cell") 
    if (!cell) {
      cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
    }
    cell.textLabel().setText(self.dataSource()[indexPath.row()])
    return cell
  },
  tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
    return 60
  },
  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
     var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert",self.dataSource()[indexPath.row()], self, "OK",  null);
     alertView.show()
  },
  alertView_willDismissWithButtonIndex: function(alertView, idx) {
    console.log('click btn ' + alertView.buttonTitleAtIndex(idx).toJS())
  }
})
