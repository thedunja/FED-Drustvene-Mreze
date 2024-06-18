import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FedComment } from 'src/app/model/comments.model';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post = new Post();
  commentList: FedComment[] = [];
  closeResult: string = '';
  commentForm: FormGroup;

  params = {
    'sort': 'rating',
    'sortDirection': 'desc',
  }

  constructor(private service: PostService, private modalService: NgbModal) {
    this.commentForm = new FormGroup({
      'text': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.service.getComments(this.post._id, this.params).subscribe({
      next: data => {

        this.commentList = data
      },
      error: err => console.log(err)
    })


  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      let newComment = new FedComment(this.commentForm.value)
      newComment.user.name = 'Marko'

      this.service.postComment(newComment, this.post._id).subscribe({
        next: data => {
          console.log(data);
          this.ngOnInit();

        },
        error: err => console.log(err)
      })

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
